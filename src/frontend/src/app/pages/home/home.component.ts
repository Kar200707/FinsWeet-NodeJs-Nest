import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Authors} from "../../models/authors";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {RequestService} from "../../services/request.service";
import {environment} from "../../../environment/environment";
import {Posts} from "../../models/posts";
import {Logo} from "../../models/logo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    JoinOurTeamComponent,
    ListOuthorsComponent,
    CategoryblockComponent,
    NgIf,
    NgForOf,
    RouterModule,
    LoaderBarComponent
  ]
})
export class HomeComponent implements OnInit {
  dataCategory!: Category[];
  dataPosts!: Posts[];
  dataAuthors!: Authors[];
  dataAuthor1!: Authors;
  dataAuthor2!: Authors;
  dataLogos!: Logo;
  postAuthors: Authors[] = [];

  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe(
        (data: Category[]):void => {
          this.dataCategory = data;
        }
      )

    this.reqServ.getData<Posts[]>(environment.posts.get)
      .subscribe(
        (data: Posts[]):void => {
          this.dataPosts = data;


          data.forEach((item, i)=>{
            this.reqServ.getData<Authors>(environment.author.get + '/' + item.user_id)
              .subscribe(
                (auth: Authors):void => {
                  this.postAuthors[i] = auth;
                }
              )
          })

          this.reqServ.getData<Authors>(environment.author.get + '/' + this.dataPosts[1].user_id)
            .subscribe(
               (data: Authors):void => {
                  this.dataAuthor1 = data;
               }
            )

         this.reqServ.getData<Authors>(environment.author.get + '/' + this.dataPosts[0].user_id)
         .subscribe(
            (data: Authors):void => {
               this.dataAuthor2 = data;
            }
         )
        }
      )

    this.reqServ.getData<Authors[]>(environment.author.get + '?superAdmin=false')
      .subscribe(
        (data: Authors[]):void => {
          this.dataAuthors = data;
        }
      )

    this.reqServ.getData<any>(environment.logos.get)
      .subscribe(
        (data: any):void => {
          this.dataLogos = data[0];
        }
      )
  }


  callUser(id: string | undefined):Authors {
   let data!:Authors;
   this.reqServ.getData<Authors>(environment.author.get + '/' + id)
   .subscribe(
      (author: Authors) => {
         data = author;
      }
   )
   return data;
  }
}

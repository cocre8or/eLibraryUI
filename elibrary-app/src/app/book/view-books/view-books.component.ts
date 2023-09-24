import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiEndpoints } from 'src/app/models/api-endpoints';
import { IAppConfig } from 'src/app/models/app-config.model';
import { IEbook } from 'src/app/models/ebook.model';
import { AppConfigService } from 'src/app/services/app-config.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  public ebooks: IEbook[] = []
  private config!: IAppConfig;
  private sub!: Subscription;
  
  public constructor(
    private appConfigService: AppConfigService,
    private httpService: HttpService){

  }
  ngOnInit(): void {
    this.getSettings();
  }

  private async getSettings(){
    
    this.config = await this.appConfigService.load();
    this.httpService.setBasePath(this.config.baseApiUrl);
    this.sub = this.httpService.get(ApiEndpoints.VIEWBOOKS).subscribe(book => {
      this.ebooks = book;
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}

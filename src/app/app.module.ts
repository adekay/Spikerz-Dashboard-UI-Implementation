import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './pages';
import { Sidebar } from './layout';
import { ServerAssessment, Connection, ServerConnection, ListItem, ServerCard, Ec2, Server, Instance } from './components';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [App, Home, Sidebar, ServerCard, ListItem, ServerConnection, Connection, ServerAssessment, Ec2, Server, Instance],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgbCollapseModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    NgApexchartsModule,
    MatTooltipModule
  ],
  bootstrap: [App]
})
export class AppModule { }

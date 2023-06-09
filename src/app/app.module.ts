import { OptionalComponent } from './optional/optional.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { HostComponent } from './host/host.component';
import { SelfComponent } from './self/self.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { HostChildComponent } from './host-child/host-child.component';
import { SkipselfChildComponent } from './skipself/skipself-child/skipself-child.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
    SkipselfChildComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
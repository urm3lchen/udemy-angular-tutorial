import { PropertyBindingComponent } from './databinding/property-binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
<<<<<<< HEAD
import { OtherComponent } from './other/other.component';
import { LifecycleComponent } from './lifecycle.component';
=======
>>>>>>> ComponentsAndDatabinding

@NgModule({
   declarations: [
      AppComponent,
      DatabindingComponent,
      PropertyBindingComponent,
<<<<<<< HEAD
      EventBindingComponent,
      OtherComponent,
      LifecycleComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
=======
      EventBindingComponent
   ],
   imports: [
      BrowserModule
>>>>>>> ComponentsAndDatabinding
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

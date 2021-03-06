import { NgModule } from "@angular/core";
import {
  ActivatedRoute,
  PreloadAllModules,
  RouterModule,
  Routes,
} from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "series",
    loadChildren: () =>
      import("./series/series.module").then((m) => m.SeriesPageModule),
  },
  {
    path: "detail",
    loadChildren: () =>
      import("./detail/detail.module").then((m) => m.DetailPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

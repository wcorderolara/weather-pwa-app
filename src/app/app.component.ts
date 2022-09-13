import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor(
    private updates: SwUpdate,
    private snackbarService: MatSnackBar
  ) {}

  ngOnInit() {
    console.log(this.updates);
    this.updates.versionUpdates.pipe(
      filter( (evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map( evt => {
        this.snackbarService.open('Hay una nueva version disponible', 'Actualiza Ahora').afterDismissed()
      })
    ).subscribe( () => {
      this.updates.activateUpdate().then( () => location.reload())
    })
  }
}

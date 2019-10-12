import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService, ClienteEntity } from '../_services/cliente.service';
import { CidadeService, CidadeEntity } from '../_services/cidade.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav //#1

  public displayedColumns: string[] = ['codigo', 'nome', 'email', 'cidade', 'options'];

  public clientes: ClienteEntity[] = [];
  public cidades: CidadeEntity[] = [];

  public cliente: ClienteEntity = new ClienteEntity();


  public msgerror: string;
  public loading: boolean;

  constructor(private service: ClienteService, private cidadeService: CidadeService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {

    //inicia variáveis de controlle
    this.msgerror = '';
    this.loading = true;

    //carrega dados
    this.service.find().subscribe(result => {

      this.clientes = result;

      this.cidadeService.find().subscribe(result => {

        this.cidades = result;

        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }

  private openSidebar(cliente: ClienteEntity) {//preciso acessar o objeto que ta no html, #1 onInit()
    this.cliente = cliente;//tenho q inicializar a variavels

    this.sidenav.open();
  }

  public add() {
    this.openSidebar(new ClienteEntity());
  }

  public editar(cliente: ClienteEntity) {
    this.openSidebar(cliente);
  }

  public excluir(cliente: ClienteEntity): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro ?')
    });

    //subscribe = then 

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;
        this.service.delete(cliente.id).subscribe(result => {
          this.snackBar.open('Registro excluido com sucesso!', '', {
            duration: 3000
          })
        }, error => {
          this.msgerror = error.message;

        }).add(() => {
          this.loading = false;
        });

      }
    });
  }

  public confirmar() {
    this.loading = true;

    this.service.save(this.cliente).subscribe(result => {
      this.snackBar.open('Registro excluido com sucesso!', '', {
        duration: 3000
      });
    }, error => {
      this.msgerror = error.message;
    }).add(() => {
      this.sidenav.close();

      this.loading = false;
    });
  }

  public compareOptions(id1, id2) {//para puxar objeto
    //receita de bolo (:3)
    return id1 && id2 && id1.id === id2.id
  }

}

import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.css'],
    standalone: true,
    imports: [FormsModule, CommonModule, HeaderComponent, NgxMaskDirective, NgxMaskPipe, FooterComponent],
    providers: [provideNgxMask()]
})
export class ContatoComponent implements OnInit, AfterViewInit {
    @ViewChild('formsSection') formsSection!: ElementRef;

    formData = {
        nome: '',
        email: '',
        cpf: '',
        sobrenome: '',
        telefone: '',
        contatoPreferido: '',
        mensagem: '',
        tipoMensagem: '',
        aceitaTermos: false,
        receberNovidades: false
    };

    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        // Fade in body
        this.renderer.setStyle(document.body, 'opacity', '0');
        this.renderer.setStyle(document.body, 'transition', 'opacity 1s');
        setTimeout(() => {
            this.renderer.setStyle(document.body, 'opacity', '1');
        }, 100);
    }

    ngAfterViewInit() {
        // Animate form section
        setTimeout(() => {
            const formSection = this.formsSection.nativeElement;
            this.renderer.setStyle(formSection, 'opacity', '0');
            this.renderer.setStyle(formSection, 'transform', 'translateY(50px)');

            setTimeout(() => {
                this.renderer.setStyle(formSection, 'opacity', '1');
                this.renderer.setStyle(formSection, 'transform', 'translateY(0)');
            }, 300);

            // Add focus/blur events to form inputs
            const inputs = formSection.querySelectorAll('.fordform');
            inputs.forEach((input: HTMLElement) => {
                this.renderer.listen(input, 'focus', () => {
                    this.renderer.setStyle(input, 'transition', '0.3s');
                    this.renderer.addClass(input, 'in-focus');
                });

                this.renderer.listen(input, 'blur', () => {
                    this.renderer.removeClass(input, 'in-focus');
                });
            });

            // Add hover effects to submit button
            const button = formSection.querySelector("button[type='submit']");
            if (button) {
                this.renderer.listen(button, 'mouseover', () => {
                    if (this.formData.aceitaTermos) {
                        this.renderer.addClass(button, 'in-mouseover-btn');
                    }
                });

                this.renderer.listen(button, 'mouseout', () => {
                    this.renderer.removeClass(button, 'in-mouseover-btn');
                });
            }

            // Add hover effects to nav links
            const navLinks = document.querySelectorAll('header nav a');
            navLinks.forEach((link: Element) => {
                this.renderer.listen(link, 'mouseover', () => {
                    this.renderer.addClass(link, 'in-mouseover-link');
                });

                this.renderer.listen(link, 'mouseout', () => {
                    this.renderer.removeClass(link, 'in-mouseover-link');
                });
            });
        }, 0);
    }

    submitForm() {
        // Check if all required fields are filled
        if (this.isFormValid()) {
        // Create contato object
        const contatoData = {
            nome: this.formData.nome,
            sobrenome: this.formData.sobrenome,
            email: this.formData.email,
            cpf: this.formData.cpf,
            telefone: this.formData.telefone,
            contatoPreferido: this.formData.contatoPreferido,
            mensagem: this.formData.mensagem,
            tipoMensagem: this.formData.tipoMensagem
        };
    
        console.log('Dados do contato:', contatoData);
        alert(`Obrigado sr(a) ${this.formData.nome} os seus dados foram encaminhados com sucesso`);
        this.limparFormulario();
        } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
        }
    }

    // Add this new method to check if all required fields are filled
    // Add this method if it doesn't exist
    isFormValid(): boolean {
      return (
        this.formData.nome?.trim() !== '' &&
        this.formData.sobrenome?.trim() !== '' &&
        this.formData.email?.trim() !== '' &&
        this.formData.cpf?.toString().trim() !== '' &&
        this.formData.telefone?.toString().trim() !== '' &&
        this.formData.contatoPreferido !== '' &&
        this.formData.mensagem?.trim() !== '' &&
        this.formData.tipoMensagem !== '' &&
        this.formData.aceitaTermos === true
      );
    }
    
    // Update the addMouseoverEffectBtn method
    addMouseoverEffectBtn(event: MouseEvent) {
      if (this.formData.aceitaTermos) {
        const element = event.target as HTMLElement;
        element.classList.add('in-mouseover-btn');
      }
    }

    limparFormulario() {
        this.formData = {
            nome: '',
            email: '',
            cpf: '',
            sobrenome: '',
            telefone: '',
            contatoPreferido: '',
            mensagem: '',
            tipoMensagem: '',
            aceitaTermos: false,
            receberNovidades: false
        };
    }

    verificarBotao() {
        // This is handled by Angular binding in the template
    }

    // Add these methods to your ContatoComponent class

    addMouseoverEffect(event: MouseEvent) {
        const element = event.target as HTMLElement;
        element.classList.add('in-mouseover-link');
    }

    removeMouseoverEffect(event: MouseEvent) {
        const element = event.target as HTMLElement;
        element.classList.remove('in-mouseover-link');
    }



    removeMouseoverEffectBtn(event: MouseEvent) {
        const element = event.target as HTMLElement;
        element.classList.remove('in-mouseover-btn');
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent implements OnInit {
// Variables pour stocker les nombres aléatoires et l'opérateur
number1!: number;
number2!: number;
operator!: string;

// Variable pour stocker le résultat attendu
expectedResult!: number;

// Variable pour stocker la réponse de l'utilisateur
userAnswer!: number;

// Message pour afficher si la réponse est correcte ou non
message!: string;

constructor() { }

ngOnInit(): void {
  this.generateQuestion();
}

// Fonction pour générer une nouvelle question
generateQuestion(): void {
  // Générer deux nombres aléatoires entre 0 et 9
  this.number1 = Math.floor(Math.random() * 10);
  this.number2 = Math.floor(Math.random() * 10);

  // Choisir un opérateur aléatoire parmi +, -, * et /
  const operators = ['+', '-', '*','/'];
  this.operator = operators[Math.floor(Math.random() * operators.length)];

  // Calculer le résultat en fonction de l'opérateur choisi
  switch (this.operator) {
    case '+':
      this.expectedResult = this.number1 + this.number2;
      break;
    case '-':
      // S'assurer que le résultat n'est pas négatif
      if (this.number1 < this.number2) {
        [this.number1, this.number2] = [this.number2, this.number1];
      }
      this.expectedResult = this.number1 - this.number2;
      break;
    case '*':
      this.expectedResult = this.number1 * this.number2;
      break;
    case '/':
      this.expectedResult = this.number1 / this.number2;
      break;
  }

  // Réinitialiser la réponse de l'utilisateur et le message
  this.userAnswer = 0;
  this.message = '';
}

// Fonction pour vérifier la réponse de l'utilisateur
checkAnswer(): void {
  if (this.userAnswer === this.expectedResult) {
    this.message = 'Bonne réponse !';
  } else {
    this.message = 'Mauvaise réponse. Essayez encore !';
  }
}
}

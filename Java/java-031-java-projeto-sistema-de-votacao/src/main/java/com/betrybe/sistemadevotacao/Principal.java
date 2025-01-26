package com.betrybe.sistemadevotacao;

import java.util.Scanner;

/**
 * The type Principal.
 */
public class Principal {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {
    // TODO Auto-generated method stub
    Scanner scanner = new Scanner(System.in);
    GerenciamentoVotacao gerenciamentoVotacao = new GerenciamentoVotacao();

    // Cadastro de Candidatos
    while (true) {
      System.out.println("Cadastrar pessoa candidata? ");
      System.out.println("1 - Sim");
      System.out.println("2 - Não");
      System.out.println("Entre com o número correspondente à opção desejada: ");
      int option = scanner.nextInt();

      if (option == 1) {
        System.out.println("Entre com o nome da pessoa candidata: ");
        String nomePessoaCandidata = scanner.next();
        System.out.println("Entre com o número da pessoa candidata: ");
        int numeroPessoaCandidata = scanner.nextInt();

        gerenciamentoVotacao.cadastrarPessoaCandidata(nomePessoaCandidata, numeroPessoaCandidata);
      } else if (option == 2) {
        break;
      }
    }

    // Cadastro de Eleitores

    while (true) {
      System.out.println("Cadastrar pessoa eleitora? ");
      System.out.println("1 - Sim");
      System.out.println("2 - Não");
      System.out.println("Entre com o número correspondente à opção desejada: ");
      int option = scanner.nextInt();
      scanner.nextLine();

      if (option == 1) {
        System.out.println("Entre com o nome da pessoa eleitora: ");
        String nomePessoaEleitora = scanner.next();
        System.out.println("Entre com o CPF da pessoa eleitora: ");
        String cpfPessoaEleitora = scanner.next();

        gerenciamentoVotacao.cadastrarPessoaEleitora(nomePessoaEleitora, cpfPessoaEleitora);
      } else if (option == 2) {
        break;
      }
    }

    // Votação

    while (true) {
      System.out.println("Entre com o número correspondente à opção desejada: ");
      System.out.println("1 - Votar");
      System.out.println("2 - Resultado Parcial");
      System.out.println("3 - Finalizar Votação");

      int option = scanner.nextInt();

      if (option == 1) {
        System.out.println("Entre com o cpf da pessoa eleitora: ");
        String cpfPessoaEleitora = scanner.next();
        System.out.println("Entre com o número da pessoa candidata: ");
        int numPessoaCandidata = scanner.nextInt();

        gerenciamentoVotacao.votar(cpfPessoaEleitora, numPessoaCandidata);
      } else if (option == 2) {
        gerenciamentoVotacao.mostrarResultado();
      } else if (option == 3) {
        gerenciamentoVotacao.mostrarResultado();
        break;
      }
    }
    scanner.close();
  }
}
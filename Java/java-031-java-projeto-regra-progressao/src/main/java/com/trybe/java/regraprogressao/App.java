package com.trybe.java.regraprogressao;

import java.util.Scanner;

/**
 * App.
 */
public class App {

  /**
   * Metodo main.
   */
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Digite a quantidade de atividades para cadastrar:");

    int atividadesQty = scanner.nextInt();
    scanner.nextLine();

    int somaPesos = 0;

    String[] nomesAtividades = new String[atividadesQty];
    int[] pesosAtividades = new int[atividadesQty];
    double[] notasAtividades = new double[atividadesQty];

    for (int index = 0; index < atividadesQty; index++) {
      System.out.println("Digite o nome da atividade " + (index + 1) + ": ");
      nomesAtividades[index] = scanner.nextLine();

      System.out.println("Digite o peso da atividade " + (index + 1) + ": ");
      pesosAtividades[index] = Integer.parseInt(scanner.nextLine());

      somaPesos += pesosAtividades[index];

      System.out.println("Digite a nota obtida para " + nomesAtividades[index] + ":");
      notasAtividades[index] = Double.parseDouble(scanner.nextLine());
    }

    if (somaPesos != 100) {
      System.out.println("A soma dos pesos é diferente de 100!");
    } else {
      double notaFinal = calcularNotaFinal(pesosAtividades, notasAtividades);
      System.out.println("A nota final da pessoa estudante é: " + notaFinal);

      verificaAprovacao(notaFinal);
    }

    scanner.close();
  }

  private static double calcularNotaFinal(int[] pesosAtividades, double[] notasAtividades) {
    double notaFinal = 0;
    int somaPesos = 0;

    for (int i = 0; i < pesosAtividades.length; i++) {
      notaFinal += (pesosAtividades[i] / 100.0) * notasAtividades[i];
      somaPesos += pesosAtividades[i];
    }



    if (somaPesos == 100) {
      return notaFinal;
    } else {
      System.out.println("A soma dos pesos é diferente de 100!");
      return 0.0;
    }
  }

  private static void verificaAprovacao(double notaFinal) {

    if (notaFinal >= 85.0) {
      String msgAprovado = "Parabéns! Você alcançou " + notaFinal
          + "% E temos o prazer de informar que você obteve aprovação!";
      System.out.println(msgAprovado);
    } else {
      String msgReprovado = "Lamentamos informar que, "
          + "com base na sua pontuação alcançada neste período, "
          + notaFinal + "%, "
          + "você não atingiu a pontuação mínima necessária para sua aprovação.";
      System.out.println(msgReprovado);
    }
  }
}

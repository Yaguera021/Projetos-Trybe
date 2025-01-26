package com.betrybe.sistemadevotacao;

import java.util.ArrayList;

/**
 * Classe responsável por gerenciar o processo de votação.
 */
public class GerenciamentoVotacao implements GerenciamentoVotacaoInterface {
  private ArrayList<PessoaCandidata> pessoasCandidatas;
  private ArrayList<PessoaEleitora> pessoasEleitoras;
  private ArrayList<String> cpfsComputados;

  /**
   * Construtor da classe GerenciamentoVotacao.
   */
  public GerenciamentoVotacao() {
    this.pessoasCandidatas = new ArrayList<>();
    this.pessoasEleitoras = new ArrayList<>();
    this.cpfsComputados = new ArrayList<>();
  }

  /**
   * Método para cadastrar uma pessoa candidata.
   *
   * @param nome   O nome da pessoa candidata.
   * @param numero O número identificador para voto.
   */
  @Override
  public void cadastrarPessoaCandidata(String nome, int numero) {
    for (PessoaCandidata candidata : pessoasCandidatas) {
      if (candidata.getNumero() == numero) {
        System.out.println("Número da pessoa candidata já utilizado!");
        return;
      }
    }

    PessoaCandidata novaCandidata = new PessoaCandidata(nome, numero);
    pessoasCandidatas.add(novaCandidata);
  }

  /**
   * Método para cadastrar uma pessoa eleitora.
   *
   * @param nome O nome da pessoa eleitora.
   * @param cpf  O CPF da pessoa eleitora.
   */
  @Override
  public void cadastrarPessoaEleitora(String nome, String cpf) {
    for (PessoaEleitora eleitora : pessoasEleitoras) {
      if (eleitora.getCpf().equals(cpf)) {
        System.out.println("Pessoa eleitora já cadastrada!");
        return;
      }
    }

    PessoaEleitora novaEleitora = new PessoaEleitora(nome, cpf);
    pessoasEleitoras.add(novaEleitora);
  }

  /**
   * Método para registrar um voto.
   *
   * @param cpfPessoaEleitora    O CPF da pessoa eleitora que está votando.
   * @param numeroPessoaCandidata O número da pessoa candidata que está recebendo o voto.
   */
  @Override
  public void votar(String cpfPessoaEleitora, int numeroPessoaCandidata) {
    if (cpfsComputados.contains(cpfPessoaEleitora)) {
      System.out.println("Pessoa eleitora já votou!");
      return;
    }

    for (PessoaCandidata candidata : pessoasCandidatas) {
      if (candidata.getNumero() == numeroPessoaCandidata) {
        candidata.receberVoto();
        cpfsComputados.add(cpfPessoaEleitora);
        return;
      }
    }

    System.out.println("Número da pessoa candidata não encontrado!");
  }

  /**
   * Método para mostrar o resultado da votação.
   */
  @Override
  public void mostrarResultado() {
    if (cpfsComputados.isEmpty()) {
      System.out.println("É preciso ter pelo menos um voto para mostrar o resultado.");
      return;
    }

    int totalVotos = cpfsComputados.size();

    for (PessoaCandidata candidata : pessoasCandidatas) {
      int votosCandidata = candidata.getVotos();
      String nome = candidata.getNome();
      double percentualVotos = votosCandidata * 100 / totalVotos;
      System.out.printf("Nome: %s - %d votos ( %.0f%% )%n", nome, votosCandidata, percentualVotos);
    }

    System.out.println("Total de votos: " + totalVotos);
  }
}

SELECT u.nome AS pessoa_usuaria,
    COUNT(hr.id_cancao) AS musicas_ouvidas,
    ROUND(SUM(c.cancoes_duracao) /60, 2) AS total_minutos
FROM SpotifyClone.usuario u
JOIN SpotifyClone.historico hr ON u.id_usuario = hr.id_usuario
JOIN SpotifyClone.cancoes c ON hr.id_cancao = c.id_cancoes
GROUP BY u.nome
ORDER BY u.nome;


SELECT COUNT(*) AS musicas_no_historico
FROM SpotifyClone.historico h
JOIN SpotifyClone.usuario u ON h.id_usuario = u.id_usuario
WHERE u.nome = 'Barbara Liskov';

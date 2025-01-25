SELECT al.nome_album AS album, COUNT(*) AS favoritadas
FROM SpotifyClone.cancoes_favoritas cf
JOIN SpotifyClone.cancoes c ON cf.id_cancao= c.id_cancoes
JOIN SpotifyClone.album al ON c.id_album= al.id_album
GROUP BY al.id_album
ORDER BY favoritadas DESC, album ASC
LIMIT 3;





SELECT
    a.nome_artista AS artista,
    al.nome_album AS album,
    COUNT(s.id_usuario) AS pessoas_seguidoras
FROM
    SpotifyClone.artistas AS a
JOIN
    SpotifyClone.album AS al ON a.id_artista = al.id_artista
LEFT JOIN 
    SpotifyClone.seguindo_artistas AS s ON a.id_artista = s.id_artista
GROUP BY
    a.id_artista, al.id_album
ORDER BY
    pessoas_seguidoras DESC, artista, album;



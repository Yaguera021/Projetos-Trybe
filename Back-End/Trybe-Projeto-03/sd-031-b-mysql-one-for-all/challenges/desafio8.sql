SELECT
    'Elis Regina' AS artista,
    album.nome_album AS album
FROM
    SpotifyClone.album
JOIN
    SpotifyClone.artistas ON album.id_artista = artistas.id_artista
WHERE
    artistas.nome_artista = 'Elis Regina'
ORDER BY
    album.nome_album;

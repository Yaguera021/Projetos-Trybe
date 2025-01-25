SELECT
    u.nome AS pessoa_usuaria,
    CASE
        WHEN MAX(h.data_reproducao) >= '2021-01-01' THEN 'Ativa'
        ELSE 'Inativa'
    END AS status_pessoa_usuaria
FROM
    SpotifyClone.usuario u
LEFT JOIN
    SpotifyClone.historico h ON u.id_usuario = h.id_usuario
GROUP BY
    u.nome
ORDER BY
    pessoa_usuaria;

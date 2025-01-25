SELECT
    ROUND(MIN(planos.valor), 2) AS faturamento_minimo,
    ROUND(MAX(planos.valor), 2) AS faturamento_maximo,
    ROUND(AVG(planos.valor), 2) AS faturamento_medio,
    ROUND(SUM(planos.valor), 2) AS faturamento_total
FROM SpotifyClone.planos
JOIN SpotifyClone.usuario ON planos.id_plano = usuario.id_plano;




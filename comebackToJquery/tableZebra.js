/**
 * 2n = par [2 * 0 = 0; 2 * 1 = 2, 2 * 2 = 4] (0, 2, 4)
 * 2n+1 (impar) [2 * 0 + 1 = 1; 2 * 1 + 1 = 3; 2 * 2 + 1 = 5] (1, 3, 5)
 * 3n+1 [(3 * 0 + 1 = 1), (3 * 1 + 1 = 4), (3 * 2 + 1 = 7)] (1, 4, 7)
 * 4n - 1 [(4 * 0 - 1 = -1), (4 * 1 - 1 = 3), (4 * 2 - 1 = 7)] (-1, 3, 7)
 * 4n [(4 * 0 = 0), (4 * 1 = 4), (4 * 2 = 8)] (0, 4, 8)
 */

// Listar 2 em 2
$('.teste tr:nth-child(4n - 1)').addClass('zebra')
$('.teste tr:nth-child(4n)').addClass('zebra')
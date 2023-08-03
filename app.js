
function somarTotal(item) {
    var caixas = parseInt(document.getElementById("caixas" + item).value) || 0;
    var bolsas = parseInt(document.getElementById("bolsas" + item).value) || 0;
    var individual = parseInt(document.getElementById("individual" + item).value) || 0;

    var total = caixas * quantidadeCarnesCaixas[item - 1] + bolsas * quantidadeCarnesBolsas[item - 1] + individual;
    
    document.getElementById("total" + item).textContent = total;
  }

  function somarTotalGeral() {
    var totalGeral = 0;

    for (var i = 1; i <= 10; i++) {
      var totalItem = parseInt(document.getElementById("total" + i).textContent) || 0;
      totalGeral += totalItem;
    }

    alert("Total geral: " + totalGeral);
  }

  // Quantidade total de carnes correspondente a cada item em "Caixas"
  var quantidadeCarnesCaixas = [28, 36, 36, 36, 32, 36, 22, 18, 24, 48];

  // Quantidade total de carnes correspondente a cada item em "Bolsas"
  var quantidadeCarnesBolsas = [4, 6, 4, 4, 4, 2, 2, 1, 1, 4];
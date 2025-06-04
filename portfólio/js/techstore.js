document.addEventListener('DOMContentLoaded', function() {
  // Gráfico de Barras - Vendas
  const ctxVendas = document.getElementById('graficoVendas').getContext('2d');
  new Chart(ctxVendas, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Vendas (R$)',
        data: [25000, 18000, 28000, 32000, 30000, 35000, 40000, 38000, 45000, 50000, 55000, 70000],
        backgroundColor: '#4e54c8',
        borderRadius: 5,
        borderSkipped: false
      }]
    },
    options: getChartOptions('R$')
  });

  // Gráfico de Linha - Clientes
  const ctxClientes = document.getElementById('graficoClientes').getContext('2d');
  new Chart(ctxClientes, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Clientes Ativos',
        data: [120, 135, 150, 145, 160, 175, 185, 195, 210, 230, 245, 230],
        borderColor: '#8f94fb',
        backgroundColor: 'rgba(143, 148, 251, 0.1)',
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#4e54c8',
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: getChartOptions()
  });

  // Configurações comuns dos gráficos
  function getChartOptions(prefix = '') {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#1a1a2e',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#4e54c8',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return prefix + context.parsed.y.toLocaleString('pt-BR');
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.05)'
          },
          ticks: {
            callback: function(value) {
              return prefix + value.toLocaleString('pt-BR');
            }
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
document.getElementById('roasForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let adSpend = parseFloat(document.getElementById('adSpend').value);
    let revenue = parseFloat(document.getElementById('revenue').value);
  
    if (adSpend > 0 && revenue > 0) {
      const roas = (revenue / adSpend).toFixed(2);
      document.getElementById('result').innerText = `ROAS: ${roas}`;
    } else {
      document.getElementById('result').innerText = "Please enter valid values.";
    }
  });
  
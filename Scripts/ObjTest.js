function Card(navn, adresse, tlf)
	{
		this.navn = navn;
		this.adresse = adresse;
		this.tlf = tlf;
		this.PrintCard = PrintCard;
		this.ShowCard = ShowCard;
	}

function PrintCard()
	{
		linie1 = "Navn: " + this.navn + "<br>";
		linie2 = "Adresse: " + this.adresse + "<br>";
		linie3 = "Tlf: " + this.tlf + "<hr>"
		document.write(linie1 + linie2 + linie3)
		window.print()
	}	

function ShowCard()
	{
		linie1 = "<b>Navn:</b>" + this.navn + "<br>";
		linie2 = "<b>Adresse:</b>" + this.adresse + "</b>";
		linie3 = "<b>Tlf:</b>" + this.tlf + "<hr>";
		document.write(linie1 + linie2 + linie3)
	}	
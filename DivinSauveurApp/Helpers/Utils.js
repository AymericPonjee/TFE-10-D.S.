export function getInscription(){

    const { NomUtilisateur }  = this.state ;
    const { PrenomUtilisateur }  = this.state ;
    const { TotemUtilisateur }  = this.state ;
    const { QualiUtilisateur }  = this.state ;
    const { MailUtilisateur }  = this.state ;

    fetch('http://192.168.0.47:8889/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            Nom:NomUtilisateur,
            Prenom:PrenomUtilisateur,
            Totem:TotemUtilisateur,
            Quali:QualiUtilisateur,
            Mail:MailUtilisateur

        })

    }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
                console.error(error);
            });
}
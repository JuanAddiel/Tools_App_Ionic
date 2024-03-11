import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
} from "@ionic/react";
import axios from "axios";
import "../theme/index.css";

export const Country = () => {
  const [universities, setUniversities] = useState<any[]>([]);
  const [country, setCountry] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const universitiesPerPage: number = 3;

  useEffect(() => {
    if (country !== "") {
      fetchUniversities();
    }
  }, [country]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      setUniversities(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching universities:", error);
      setError("Error fetching universities. Please try again later.");
    }
  };

  const handleCountry = (e: any) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = universities.slice(
    indexOfFirstUniversity,
    indexOfLastUniversity
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Country University</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-text-center">
          <div className="ion-padding ion-margin-top">
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonInput
                  style={{
                    fontSize: "1.2rem",
                    padding: "12px",
                    height: "55px",
                  }}
                  label="Your country"
                  labelPlacement="floating"
                  placeholder="Enter country"
                  value={country}
                  onIonChange={(e) => handleCountry(e)}
                  id="country"
                  type="text"
                ></IonInput>
              </IonItem>
              <IonButton
                type="submit"
                expand="block"
                color="success"
                className="ion-margin-top"
              >
                Submit
              </IonButton>
            </form>
          </div>
          {error && (
            <IonAlert
              isOpen={!!error}
              message={error}
              buttons={["OK"]}
              onDidDismiss={() => setError("")}
            />
          )}
          <div className="ion-margin-top ion-text-center">
            {universities.length > universitiesPerPage && (
              <IonButton
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </IonButton>
            )}
            {universities.length > universitiesPerPage && (
              <IonButton
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastUniversity >= universities.length}
              >
                Next
              </IonButton>
            )}
          </div>
          <IonList>
            {currentUniversities.map((university, index) => (
              <IonCard key={index} className="custom-card">
                <IonCardHeader>
                  <IonCardTitle className="custom-card-title">
                    {university.name}
                  </IonCardTitle>
                  <IonCardSubtitle className="custom-card-subtitle">
                    Dominio: {university.domains}
                  </IonCardSubtitle>
                </IonCardHeader>
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-card-link"
                >
                  <IonButton className="custom-button">
                    {university.web_pages[0]}
                  </IonButton>
                </a>
              </IonCard>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Country;

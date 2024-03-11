import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonContent,
  IonPage,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonThumbnail,
  IonImg,
  IonButton,

} from "@ionic/react";

const WordpressNews: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {

    fetchNews();
  }, []); // Volvemos a cargar los datos solo si cambia el estado de carga

      const fetchNews = async () => {
        try {
          const response = await axios.get(
            "https://apieldia.onrender.com/api/posts"
          );
          setNews(response.data.slice(0, 3)); // Obtiene solo las últimas 3 noticias
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
  return (
    <IonPage>
      <IonContent>
       
          <IonList>
            {news.map((post) => (
              <IonCard key={post.id}>
                <IonCardHeader>
                  <IonCardTitle>{post.title.rendered}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonThumbnail slot="start" className="ion-align-items-center">
                    <IonImg
                      src="https://pbs.twimg.com/profile_images/1721879796148264960/Cnce6iZj_400x400.jpg"
                      alt="Logo de WordPress"
                    />
                  </IonThumbnail>
                  <p
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></p>
                  <IonButton
                    expand="block"
                    fill="clear"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>

      </IonContent>
    </IonPage>
  );
};

export default WordpressNews;

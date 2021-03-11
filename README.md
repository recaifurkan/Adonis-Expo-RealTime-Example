mobil uygulamdan fiyat girişi yapacak uygulama react native expo üzerinden 
1. uygulama
kullanıcı fiyat girişi yapacak
her 100 tl üzerine 10 tl indirim
eğer hafta sonuysa toplam fiayata %10 inidirm 
2.uygulama
bu kampanyaları listenerdan dinleyen ve fiyat girşi yapıldığı zaman kampanyaları listeleyen ve 
seçim yapıldğı zaman kampanya durumuna göre fiyatın hesaplanmasını yapan ikinci bir uygulama
-------------------------
There are 3 projects in this application.
1-)mobile application where the user will enter prices(http - Expo)
2-)Checking whether the price is taken from the application that makes price entry in the 1st 
application and whether it includes an appropriate campaign, and ensuring 
the transfer to the 3rd application that listens to the campaigns.(Node js - http - websocket - Adonis Js)
3-)Apply the appropriate campaign information on the backend 
side and list the appropriate campaigns on the screen.(websocket , Expo)

In project used techs;
-Docker
-NodeJs
-Redis
-Rabbit Mq
-Node Js
-React Native
-Mongodb
-Adonis Js

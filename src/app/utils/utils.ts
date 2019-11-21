import { ToastController } from '@ionic/angular';

export class Utils {
    constructor(private toastCtrl: ToastController) {}

    public topHeadlinesFetched = "Top Headlines Fetched !";
    public fetchError = "Error in processing your request";


    async showToast(msg) {
        let toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            color: 'dark'
          });
          toast.present();
    }
}
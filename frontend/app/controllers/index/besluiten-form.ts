import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import ToasterService from 'frontend/services/toaster';
import { Municipality } from 'index';
import { municipality_data } from '../../data/municipality-data';

export default class BesluitenForm extends Controller {
  @service declare toaster: ToasterService;
  @tracked category: string = 'Categorie';
  @tracked name: string = 'Titel';
  @tracked aanwezig: string = 'Senne Bels';
  @tracked juridische_grond: string = 'Aarde';
  @tracked context_en_argumentatie: string = 'Goeie argumentatie';
  @tracked besluit: string = 'Besluit';
  @tracked for: string = 'Voor';
  @tracked against: string = 'Tegen';
  @tracked neutral: string = 'Neutraal';
  @tracked begin: string = 'Begin';
  @tracked end: string = 'Einde';
  @tracked accepted: boolean = true;
  @tracked query: any = 'Antwerpen';
  @tracked municipalityData = municipality_data;

  @action toggleAccepted() {
    this.accepted = !this.accepted;
  }

  @action searchRepo(term: string) {
    if (term === '') {
      return this.municipalityData;
    }
    return this.municipalityData.filter((municipality: Municipality) =>
      municipality.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  @action async submitDecision() {
    await axios
      .post(
        `http://localhost:3000/municipality/${this.query.title.toLowerCase()}/besluiten`,
        {
          category: this.category,
          name: this.name,
          date: {
            begin: this.begin,
            end: this.end,
          },
          body: {
            aanwezig: this.aanwezig,
            juridische_grond: this.juridische_grond,
            context_en_argumentatie: this.context_en_argumentatie,
            besluit: this.besluit,
          },
          municipal_vote: {
            for: this.for,
            against: this.against,
            neutral: this.neutral,
          },
          accepted: this.accepted,
        }
      )
      .then(() => {
        this.toaster.success(`Besluit toegevoegd aan databank`, 'Success');
      })
      .catch((err) => {
        console.log(err);
        this.toaster.success(`Er is iets fout gegaan`, 'Error');
      });
  }
}

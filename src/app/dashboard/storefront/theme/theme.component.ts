import { Component, computed, signal } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Theme, ThemeOptions } from '../../../models/store.models';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  showModal = signal<boolean>(false);
  loadingTheme = signal<boolean>(false);
  updatingBanner = signal<boolean>(false);
  themes: ThemeOptions[];
  store = computed(() => this.storeService.store());

  primary: string | undefined;
  secondary: string | undefined;

  addBannerForm: FormGroup;

  constructor(
    private storeService: StoreService,
    private confirmation: ConfirmationService,
    private fb: FormBuilder,
  ) {
    this.themes = ['antique', 'trendy', 'minimal', 'classic', 'retro'];
    this.primary = this.store()?.theme.color?.primary;
    this.secondary = this.store()?.theme.color?.secondary;
    this.addBannerForm = fb.group({
      background_image: [''],
      header: ['', Validators.required],
      sub_text: [''],
    });
  }

  updateThemeDetails(value: Theme) {
    this.loadingTheme.set(true);
    this.storeService.updateStoreDetails({ theme: value }).subscribe({
      complete: () => this.loadingTheme.set(false),
    });
  }

  selectNewTheme(arg: ThemeOptions) {
    this.updateThemeDetails({
      active_theme: arg,
      color: {
        primary: this.store()?.theme.color.primary ?? '#DA5726',
        secondary: this.store()?.theme.color.secondary ?? '#FFFFFF',
      },
    });
  }

  deleteBannerItem(id: string) {
    this.confirmation.confirm({
      header: 'Delete Store Banner?',
      message: 'Are you sure you want to delete this banner?',
      accept: () => {
        this.updatingBanner.set(true);
        this.storeService.deleteSiteBanner(id).subscribe({
          complete: () => this.updatingBanner.set(false),
        });
      },
      reject: () => {},
    });
  }

  resetColors() {
    this.primary = this.store()?.theme.color?.primary;
    this.secondary = this.store()?.theme.color?.secondary;
  }

  onSubmitStoreThemeColors() {
    this.updateThemeDetails({
      active_theme: this.store()?.theme.active_theme ?? 'minimal',
      color: {
        primary: this.primary ?? '#DA5726',
        secondary: this.secondary ?? '#FFFFFF',
      },
    });
  }

  onSubmitNewBanner() {
    if (this.addBannerForm.valid) {
      this.updatingBanner.set(true);
      this.storeService.addSiteBanner(this.addBannerForm.value).subscribe({
        next: () => this.toggleModal(false),
        complete: () => {
          this.updatingBanner.set(false);
        },
      });
    } else {
      this.addBannerForm.markAllAsTouched();
    }
  }

  get storeBannersLength() {
    return this.store()?.banners.length ?? 0;
  }

  toggleModal(value: boolean) {
    this.showModal.set(value);
    this.addBannerForm.reset();
  }
}

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default class ToasterService extends Service {
  @tracked toasts: any = A([]);

  @task
  *displayToast(toast: any): any {
    if (typeof toast.options.timeOut === 'undefined') {
      toast.options.timeOut = null;
    }

    if (typeof toast.options.closable === 'undefined') {
      toast.options.closable = true;
    }

    this.toasts.pushObject(toast);

    if (toast.options.timeOut) {
      yield timeout(toast.options.timeOut);

      if (this.toasts.includes(toast)) {
        this.toasts.removeObject(toast);
      }
    }
  }

  notify(message: any, title: any, options: any = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-info';
    }

    const toast = {
      title,
      message,
      options,
    };
    //@ts-ignore ts(2339)
    this.displayToast.perform(toast);
    return toast;
  }

  success(message: any, title: any, options: any = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'success';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'check';
    }

    const toast = {
      title,
      message,
      options,
    };
    //@ts-ignore ts(2339)
    this.displayToast.perform(toast);
    return toast;
  }

  warning(message: any, title: any, options: any = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'warning';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'alert-triangle';
    }

    const toast = {
      title,
      message,
      options,
    };
    //@ts-ignore ts(2339)
    this.displayToast.perform(toast);
    return toast;
  }

  error(message: any, title: any, options: any = {}) {
    if (typeof options.type === 'undefined') {
      options.type = 'error';
    }

    if (typeof options.icon === 'undefined') {
      options.icon = 'circle-x';
    }

    const toast = {
      title,
      message,
      options,
    };
    //@ts-ignore ts(2339)
    this.displayToast.perform(toast);
    return toast;
  }

  loading(message: any, title: any, options: any = {}) {
    if (typeof options.icon === 'undefined') {
      options.icon = 'renew';
    }

    const toast = {
      title,
      message,
      options,
    };
    //@ts-ignore ts(2339)
    this.displayToast.perform(toast);
    return toast;
  }
}

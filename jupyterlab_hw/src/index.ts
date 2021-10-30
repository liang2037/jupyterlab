import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_hw extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_hw:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_hw is activated!');
  }
};

export default plugin;

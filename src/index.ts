import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_homework extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_homework:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_homework is activated!');
  }
};

export default plugin;

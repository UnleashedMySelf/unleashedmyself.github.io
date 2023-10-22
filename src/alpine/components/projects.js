import { projectsList, handleize } from "@/helpers";
export const projects = () => ({
  projectsList: projectsList,
  activePage: 'projects',
  activeProject: null,
  showPopup: false,
  init() {
    this.activeProject = this.projectsList[0];
  },
  open(project) {
    this.activeProject = projectsList.find(
      (search_project) => handleize(search_project.title) === project
    );
    if (this.activeProject) {
      this.showPopup = true;
    }
  },
  close() {
    this.showPopup = false;
  },
  handleize,
});

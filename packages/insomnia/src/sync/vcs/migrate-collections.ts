import { RemoteProject } from '../../models/project';
import {  Workspace } from '../../models/workspace';

export const logCollectionMovedToProject = (collection: Workspace, remoteProject: RemoteProject) => {
  console.log('[sync] collection has been moved to the remote project to which it belongs', {
    collection: {
      id : collection._id,
      name: collection.name,
    },
    project: {
      id: remoteProject._id,
      name: remoteProject.name,
    },
  });
};

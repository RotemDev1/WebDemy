import { Courses } from "../../data/dummyCourses";
import { Users } from "../../data/dummyUsers";

import { storageService } from "./asyncStorageService";

export const dataService = {
    initData,
    removeData
}

function initData() {
    storageService.newEntity('user', Users);
    storageService.newEntity('courses', Courses);
}

function removeData() {
    storageService.deleteStorage();
}
import { TeacherActivitiesDetailsPage } from '@/pages/protected/Teacher/Classes/ClassDetails/Activities/ActivitiesDetails/TeacherActivitiesDetailsPage';
import { TeacherActivitiesPage } from '@/pages/protected/Teacher/Classes/ClassDetails/Activities/TeacherActivitiesPage';
import { TeacherAttendancePage } from '@/pages/protected/Teacher/Classes/ClassDetails/Attendance/TeacherAttendancePage';
import { TeacherStudentsPage } from '@/pages/protected/Teacher/Classes/ClassDetails/Students/TeacherStudentsPage';
import { TeacherClassDetailsPage } from '@/pages/protected/Teacher/Classes/ClassDetails/TeacherClassDetailsPage';
import { TeacherClassesPage } from '@/pages/protected/Teacher/Classes/TeacherClassesPage';
import { TeacherHomePage } from '@/pages/protected/Teacher/Home/TeacherHomePage';
import { TeacherSchedulePage } from '@/pages/protected/Teacher/Schedule/TeacherSchedulePage';
import { Route } from 'react-router';

export const TeacherRoutes = () => {
   return (
      <>
         <Route path="home" element={<TeacherHomePage />} />
         <Route path="schedule" element={<TeacherSchedulePage />} />
         <Route path="classes" element={<TeacherClassesPage />}>
            <Route path=":id" element={<TeacherClassDetailsPage />}>
               <Route path="activities" element={<TeacherActivitiesPage />}>
                  <Route
                     path=":id"
                     element={<TeacherActivitiesDetailsPage />}
                  />
               </Route>
               <Route path="attendance" element={<TeacherAttendancePage />} />
               <Route path="students" element={<TeacherStudentsPage />} />
            </Route>
         </Route>
      </>
   );
};

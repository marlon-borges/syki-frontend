import { StudentClassAveragePage } from '@/pages/protected/Student/Classes/ClassDetails/Average/StudentClassAveragePage';
import { StudentClassFrequencyPage } from '@/pages/protected/Student/Classes/ClassDetails/Frequency/StudentClassFrequencyPage';
import { StudentClassDetailsPage } from '@/pages/protected/Student/Classes/ClassDetails/StudentClassDetailsPage';
import { StudentClassesPage } from '@/pages/protected/Student/Classes/StudentClassesPage';
import { StudentDisciplinesPage } from '@/pages/protected/Student/Disciplines/StudentDisciplinesPage';
import { StudentFrequencyPage } from '@/pages/protected/Student/Frequency/StudentFrequencyPage';
import { StudentHomePage } from '@/pages/protected/Student/Home/StudentHomePage';
import { StudentNotesPage } from '@/pages/protected/Student/Notes/StudentNotesPage';
import { StudentSchedulePage } from '@/pages/protected/Student/Schedule/StudentSchedulePage';
import { Route } from 'react-router';

export const StudentRoutes = () => {
   return (
      <>
         <Route path="home" element={<StudentHomePage />} />
         <Route path="schedule" element={<StudentSchedulePage />} />
         <Route path="notes" element={<StudentNotesPage />} />
         <Route path="frequency" element={<StudentFrequencyPage />} />
         <Route path="disciplines" element={<StudentDisciplinesPage />} />
         <Route path="classes" element={<StudentClassesPage />}>
            <Route path=":id" element={<StudentClassDetailsPage />}>
               <Route path="average" element={<StudentClassAveragePage />} />
               <Route
                  path="frequency"
                  element={<StudentClassFrequencyPage />}
               />
            </Route>
         </Route>
      </>
   );
};

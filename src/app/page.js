import { ModalForm } from "@/components/modal/ModalForm";
import TasksCard from "@/components/tasks/TasksCard";
import { createATask } from "@/lib/actions";

export default function Home() {
  return (
    <div>
      <ModalForm createATask={createATask} />
      <TasksCard />
    </div>
  );
}

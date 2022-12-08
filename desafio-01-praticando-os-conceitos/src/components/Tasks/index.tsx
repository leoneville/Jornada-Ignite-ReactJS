import { TbClipboardText } from 'react-icons/tb';
import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
    tasks: ITask[];
    onDeleteTaskByID: (taskId: string) => void
    onCompleteTask: (taskId: string) => void
}

export function Tasks({ tasks, onDeleteTaskByID, onCompleteTask }: Props) {
    const taskQuantity = tasks.length
    const completedTasksQuantity = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasksQuantity} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => {
                    return <Task 
                        key={task.id} 
                        task={task} 
                        onDeleteTaskByID={onDeleteTaskByID}
                        onCompleteTask={onCompleteTask}
                    />
                })}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <TbClipboardText size={50} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}
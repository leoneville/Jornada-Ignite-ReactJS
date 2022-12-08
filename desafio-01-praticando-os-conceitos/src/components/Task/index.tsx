import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb'
import { ITask } from '../../App';
import { BsFillCheckCircleFill} from 'react-icons/bs'

interface Props {
    task: ITask;
    onDeleteTaskByID: (taskId: string) => void
    onCompleteTask: (taskId: string) => void
}

export function Task({ task, onDeleteTaskByID, onCompleteTask }: Props) {
    const isCompleted = task.isCompleted

    function onClickButtonCompleteTask() {
        onCompleteTask(task.id)
    }

    function onClickButtonToDelete() {
        onDeleteTaskByID(task.id)
    }

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={onClickButtonCompleteTask}>
                {isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={onClickButtonToDelete}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}
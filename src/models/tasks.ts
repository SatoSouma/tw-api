import tasksQuery from './sql/tasksQuery'
import moment from 'moment'

const tasks = {
  async create(form: any) {
    const taskName = form.taskName
    const taskDetail = form.taskDetail
    const deadLine = form.deadLine
    const departmentId = form.department
    const nowDate = moment().format('YYYY-MM-DD') //現在時刻

    const result = await tasksQuery(
      taskName,
      taskDetail,
      deadLine,
      nowDate,
      departmentId
    )

    return result
  },

  async getTasks() {
    // const result = await tasksQuery(
    //   taskName,
    //   taskDetail,
    //   deadLine,
    //   nowDate,
    //   departmentId
    // )
    // return result
  },
}

export default tasks

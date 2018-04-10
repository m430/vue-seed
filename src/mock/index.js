import Mock, {Random} from 'mockjs'

Mock.mock('/hello', {
  'list|1-10': [{
    'id|+1': 1,
    'icon': Random.image('200x100', Random.color())
  }]
})

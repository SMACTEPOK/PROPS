export const mockComments = [
  {
    id: 1, author: 'Олена', text: 'Чудовий каталог, все інтуїтивно зрозуміло!', timestamp: '2026-11-10T10:00:00Z', likes: 12, dislikes: 0,
    replies: [
      {
        id: 2, author: 'Богдан', text: 'Погоджуюсь, дизайн супер.', timestamp: '2026-11-10T10:15:00Z', likes: 5, dislikes: 0,
        replies: [
          { id: 3, author: 'Ірина', text: 'Особливо брутальний стиль.', timestamp: '2026-11-10T10:30:00Z', likes: 2, dislikes: 1, replies: [] }
        ]
      }
    ]
  },
  {
    id: 4, author: 'Максим', text: 'А де фільтр за ціною?', timestamp: '2026-11-10T11:00:00Z', likes: 1, dislikes: 4, replies: []
  }
];

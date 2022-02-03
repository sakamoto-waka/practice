# print("Hello World!")

# unko = 'l_size'

# print(type(unko))

# if unko == 'l_size':
#   print('dekai!')

# unko_list = ['unko_small', 'unko_medium', 'unko_large']
# print(unko_list[1])

# class Card:
#   def __init__(self, date, user_name):
#     self.date = date
#     self.user_name = user_name
#   def message(self):
#     return 'この投稿は' + self.user_name + 'さんが' + self.date + 'に投稿しました'

# # aさんの投稿と仮定
# date_a = '2020-01-01'
# user_name_a = 'taro'
# #card_aという変数にCardクラスの型を使ってインスタンスを作成
# card_a = Card(date_a, user_name_a)

# date_b = '2020-03-01'
# user_name_b = 'Kayoko'
# card_b = Card(date_b, user_name_b)


# # 実際にうまくいってるか確認　ユーザーaさんの投稿のユーザーネームとか投稿日時が呼び出せてる
# print(card_b.user_name)
# print(card_b.message())

# import math
# print(math.pi)

# import numpy

# numpy_list = [3, 1, 5, 10, 2093, 304, 123]
# print (numpy.sum(numpy_list)) 


# def calc_tri(tri_bottom, tri_height):
#     return tri_bottom * tri_height / 2

# triangle = calc_tri(2, 3)

# print(triangle)

# class Person:
#     def __init__(self, name, nationality, age):
#         self.name = name
#         self.nationality = nationality
#         self.age = age

#     def say_hello(self):
#         print(f'皆さんこんにちは！　私の名前は{self.name}です。')

# sakamoto = Person(name='坂本', nationality='日本', age=26)

# mike = Person(name = 'マイク', nationality = 'アメリカ', age = 29)

# mike.say_hello()

# class Person:
#     def __init__(self, name, nationality, age):
#         self.name = name
#         self.nationality = nationality
#         self.age = age

#     def say_hello(self, name):
#         print(f'{name}こんにちは！　私の名前は{self.name}です。')

# sakamoto = Person(name='坂本', nationality='日本', age=26)
# mike = Person(name = 'マイク', nationality = 'アメリカ', age = 29)
# mike.say_hello('佐藤さん')

import datetime
# print(datetime.date.today())

today = datetime.datetime.now()
# print(today.day)

# today - datetime.timedelta(days = 1)
# print(today - datetime.timedelta(days = 1))

print(today.strftime('%Y. %m. %d'))


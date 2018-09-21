import pygame
from sprite_plane import *

class Game(object):
    def __init__(self):
        self.screen = pygame.display.set_mode((480, 700))
        self.__create_sprites()
        pygame.time.set_timer(ENEMY_CREATE_EVENT, 300)

    def game_start(self):
        while True:
            self.time.tick(50)
            self.__update_sprites()
            self.__event_handle()

    def __create_sprites(self):
        #背景加载
        bg = Background()
        bg1 = Background(True)
        self.back_group = pygame.sprite.Group(bg,bg1)

        #刷新帧率
        self.time = pygame.time.Clock()

        #敌机加载
        self.enemy_group = pygame.sprite.Group()

    def __update_sprites(self):
        self.back_group.update()
        self.back_group.draw(self.screen)

        self.enemy_group.update()
        self.enemy_group.draw(self.screen)

        pygame.display.update()

    def __event_handle(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                print('游戏结束')
                pygame.quit()
                exit()
            elif event.type == ENEMY_CREATE_EVENT:
                enemy = Enemy()
                self.enemy_group.add(enemy)

if __name__ == '__main__':
    ga = Game()
    ga.game_start()



import pygame

ENEMY_CREATE_EVENT = pygame.USEREVENT

class GameBase(pygame.sprite.Sprite):
    def __init__(self, image_name, speed=2):
        super().__init__()
        self.image = pygame.image.load(image_name)
        self.rect = self.image.get_rect()
        self.speed = speed

    def update(self):
        super().update()

class Background(GameBase):
    def __init__(self, is_alt = False):
        super().__init__('./images/background.png')
        if is_alt:
            self.rect.y = -700

    def update(self):
        self.rect.y += self.speed
        if self.rect.y > 700:
            self.rect.y = -self.rect.height

class Enemy(GameBase):
    def __init__(self):
        super().__init__('./images/enemy1.png')
        self.speed =
    def update(self):
        self.rect.y += self.speed
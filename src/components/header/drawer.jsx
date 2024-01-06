import React from 'react'

const drawer = () => {
  return (
    <>
    <Button
        zIndex={'overlay'} pos={"relative"} top={'4'} left={'4'} colorScheme="orange" p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
            <BiMenuAltLeft size={'20'}/>
        </Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader>ELS-SRCC</DrawerHeader>
                    <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                        <Link to="/about">About</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                        <Link to="/blog">Blog</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                        <Link to="/podcast">Podcast</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='orange'>
                        <Link to="/contact">Contact</Link>
                    </Button>
                </VStack>
                    </DrawerBody>
                    <DrawerCloseButton/>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>
  )
}

export default drawer;
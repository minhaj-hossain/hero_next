"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function ModalForm({ createATask }) {
    return (
        <Modal>
            <Button variant="secondary">Open Contact Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" type="text">
                                        <Label>Name</Label>
                                        <Input name="name" placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" type="email">
                                        <Label>Email</Label>
                                        <Input name="email" placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="company">
                                        <Label>Company</Label>
                                        <Input placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" >Send Message</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
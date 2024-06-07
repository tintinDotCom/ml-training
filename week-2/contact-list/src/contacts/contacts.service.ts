import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      return await this.prisma.contacts.create({
        data: createContactDto,
      });
    } catch (error) {
      throw error;
    }
  }

  // async findAll() {
  //   return await this.prisma.contacts.findMany();
  // }

  async findContactById(id: number) {
    try {
      const contact = await this.prisma.contacts.findUnique({
        where: {
          id,
        },
      });

      if (!contact) {
        throw new Error(`Contact with ID ${id} not found`);
      }

      return contact;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    try {
      const updatedContact = await this.prisma.contacts.update({
        where: {
          id,
        },
        data: {
          contactName: updateContactDto.contactName,
          contactNumber: updateContactDto.contactNumber,
        },
      });

      return updatedContact;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    return await this.prisma.contacts.delete({
      where: {
        id,
      },
    });
  }
  async findByName(query: CreateContactDto) {
    const { contactName } = query;
    let where: Prisma.ContactsWhereInput = {};

    if (contactName) {
      where = {
        contactName: {
          contains: contactName,
        },
      };
    }

    return await this.prisma.contacts.findMany({ where });
  }
}
